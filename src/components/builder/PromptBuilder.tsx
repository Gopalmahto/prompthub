"use client";

import { useEffect, useState } from "react";
import { Copy, Trash2, Check } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { aiToolOptions, categoryOptions } from "@/constants/promptBuilder";

import { PromptPreview } from ".";

export default function PromptBuilder() {
  const [title, setTitle] = useState("");
  const [tool, setTool] = useState("");
  const [category, setCategory] = useState("");
  const [prompt, setPrompt] = useState("");
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const text = `Title: ${title}

Tool: ${tool}

Category: ${category}

Prompt:

${prompt}`;

    await navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  function handleClear() {
    setTitle("");
    setTool("");
    setCategory("");
    setPrompt("");

    localStorage.removeItem("prompt-builder");
  }
  useEffect(() => {
    const draft = localStorage.getItem("prompt-builder");

    if (!draft) return;

    const data = JSON.parse(draft);

    setTitle(data.title || "");
    setTool(data.tool || "");
    setCategory(data.category || "");
    setPrompt(data.prompt || "");
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "prompt-builder",
      JSON.stringify({
        title,
        tool,
        category,
        prompt,
      }),
    );
  }, [title, tool, category, prompt]);

  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="mb-2 text-5xl font-bold">Prompt Builder</h1>

      <p className="mb-10 text-muted-foreground">
        Build professional AI prompts with a live preview.
      </p>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Form */}
        <div className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Prompt Title
            </label>

            <Input
              placeholder="Enter prompt title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">AI Tool</label>

            <Select value={tool} onValueChange={setTool}>
              <SelectTrigger>
                <SelectValue placeholder="Select AI Tool" />
              </SelectTrigger>

              <SelectContent>
                {aiToolOptions.map((tool) => (
                  <SelectItem key={tool} value={tool}>
                    {tool}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Category</label>

            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>

              <SelectContent>
                {categoryOptions.map((category) => (
                  <SelectItem
                    key={category}
                    value={category}
                  >
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Prompt</label>

            <Textarea
              rows={12}
              placeholder="Write your AI prompt..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          <div className="flex gap-4">
            <Button onClick={handleCopy}>
              {copied ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Prompt
                </>
              )}
            </Button>

            <Button variant="outline" onClick={handleClear}>
              <Trash2 className="mr-2 h-4 w-4" />
              Clear
            </Button>
          </div>
        </div>

        {/* Preview */}
        <PromptPreview
          title={title}
          tool={tool}
          category={category}
          prompt={prompt}
        />
      </div>
    </div>
  );
}
