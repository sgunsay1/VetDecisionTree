import { Setter } from "solid-js";
import { activeTree } from "../App";

export const Navbar = (props: { setTree: Setter<activeTree> }) => (
  <div class="navbar bg-transparent text-center mx-8">
    <div class="btn btn-ghost text-xl" onclick={() => props.setTree("vaccine")}>
      Vaccine Helper
    </div>
    <div class="btn btn-ghost text-xl" onclick={() => props.setTree("rabies")}>
      Rabies Helper
    </div>
  </div>
);
