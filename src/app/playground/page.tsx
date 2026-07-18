"use client";

import { useState } from "react";
import Modal from "@/playground/Modal";
import Tabs from "@/playground/Tabs";
import Disclosure from "@/playground/Disclosure";

export default function PlaygroundPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-8 space-y-10">
      <h1 className="text-2xl font-bold">Accessible Component Playground</h1>

      <section>
        <h2 className="font-semibold mb-2">Modal</h2>
        <button
          onClick={() => setModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Open Modal
        </button>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Example Modal">
          <p>This is modal content. Try pressing Tab and Escape.</p>
        </Modal>
      </section>

      <section>
        <h2 className="font-semibold mb-2">Tabs</h2>
        <Tabs
          tabs={[
            { id: "one", label: "Tab One", content: <p>Content for tab one.</p> },
            { id: "two", label: "Tab Two", content: <p>Content for tab two.</p> },
            { id: "three", label: "Tab Three", content: <p>Content for tab three.</p> },
          ]}
        />
      </section>

      <section>
        <h2 className="font-semibold mb-2">Disclosure</h2>
        <Disclosure summary="Click to expand">
          <p>Hidden content revealed here.</p>
        </Disclosure>
      </section>
    </div>
  );
}