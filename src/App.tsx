import { Component, createEffect, createSignal } from "solid-js";
import { Navbar } from "./components/Navbar";
import { DecisionForm } from "./components/DecisionForm";
import { vaccineTree } from "./decisions/vaccineTree";
import { rabiesTree } from "./decisions/rabiesTree";

// list new forms here
export type activeTree = "vaccine" | "rabies";
const App: Component = () => {
  const [activeTree, setActiveTree] = createSignal<activeTree>("vaccine");
  const getTree = () => {
    switch (activeTree()) {
      case "rabies":
        return rabiesTree;
      case "vaccine":
        return vaccineTree;
      default:
        throw console.error(
          "yikes. Looks like you need to add a tree to the getTree switch case"
        );
    }
  };
  const [activeForm, setActiveForm] = createSignal(getTree().start);

  const [actionItems, setActionItems] = createSignal<string[]>([]);

  createEffect(() => {
    setActiveForm(getTree().start);
  });

  return (
    <div class="bg-gradient-to-br from-secondary/20 to-secondary/5 h-screen">
      <Navbar setTree={setActiveTree} />
      <main class="w-1/2 mx-auto">
        <h1 class="text-4xl text-center my-12 capitalize text-primary">
          {activeTree()} Decision Helper
        </h1>
        <div class="divider"></div>
        <DecisionForm
          {...activeForm()}
          tree={getTree()}
          setForm={setActiveForm}
          setActionItems={setActionItems}
          actionItems={actionItems()}
        />
      </main>
    </div>
  );
};

export default App;
