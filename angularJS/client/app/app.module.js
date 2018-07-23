import "bootstrap-css-only";
import "normalize.css";
import angular from "angular";
import appComponent from "./app.component";
import ComponentsModule from "./components/components";
import reactComponent from "./components/react-component/react-component";
import { react2angular } from "react2angular";

angular
    .module("app", [ComponentsModule.name])
    .component("app", appComponent)
    .component("reactComponent", react2angular(reactComponent, []));

