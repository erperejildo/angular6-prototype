import "bootstrap-css-only";
import "normalize.css";
import angular from "angular";
import appComponent from "./app.component";
import ComponentsModule from "./components/components";
import { react2angular } from "react2angular";
import reactUpgrade from "./components/react-upgrade-business/react-upgrade-business";


const angModule = angular.module("app", [ComponentsModule.name]);

angModule.component("app", appComponent);
angModule.component("reactUpgrade", react2angular(reactUpgrade, []));

