import { run } from "./app/app";
import css from "./main.scss";
import { AlertService } from "./app/alert.service";
import { ComponentService } from "./app/component.service";

const alertService = new AlertService();
const componentService = new ComponentService();

run(alertService, componentService);

