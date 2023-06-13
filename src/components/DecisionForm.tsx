import { For, Show } from "solid-js";
import { ButtonColor, DecisionOptions } from "../decisions/decisionTypes";

export const DecisionForm = (props: any) => {
  const getBtnColor = (color: ButtonColor): string => {
    switch (color) {
      case "blue":
        return "btn-info";
      case "green":
        return "btn-success";
      case "red":
        return "btn-error";
      case "yellow":
        return "btn-warning";
    }
  };

  const handleOption = (option: DecisionOptions<any>) => {
    console.log("clicked", option);
    if (option.path === "start") props.setActionItems([]);
    const action = option.actionItem;
    if (action)
      props.setActionItems((items: string[]) => [...items, option.actionItem]);

    props.setForm(props.tree[option.path]);
  };

  return (
    <div class="bg-base-100 rounded-lg shadow-2xl p-16 space-y-8">
      <h1 class=" text-2xl">{props.prompt}</h1>
      <Show when={props.isEnd}>
        <ul class="ml-8 text-lg list-disc">
          <For each={props.actionItems}>{(action) => <li>{action}</li>}</For>
        </ul>
      </Show>
      <div class="flex flex-row space-x-4 ">
        <For each={props.options}>
          {(option: DecisionOptions<any>) => (
            <div
              onclick={() => handleOption(option)}
              class={`btn ${getBtnColor(option.color)}`}
            >
              {option.text}
            </div>
          )}
        </For>
      </div>
    </div>
  );
};
