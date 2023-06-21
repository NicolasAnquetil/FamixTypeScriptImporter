// automatically generated code, please do not change

import { FamixJSONExporter } from "../../famix_JSON_exporter";
import { FamixBaseElement } from "./../../famix_base_element";

export class Entity extends FamixBaseElement {

  // Arezoo
  private fullyQualifiedName: string;

  // manyOne.Getter
  // @FameProperty(name = "fullyQualifiedName")
  public getFullyQualifiedName(): string {
    return this.fullyQualifiedName;
  }

  // manyOne.Setter
  public setFullyQualifiedName(fullyQualifiedName: string) {
    this.fullyQualifiedName = fullyQualifiedName;
  }

  public getJSON(): string {
    const mse: FamixJSONExporter = new FamixJSONExporter("Entity", this);
    this.addPropertiesToExporter(mse);
    return mse.getJSON();
  }

  public addPropertiesToExporter(exporter: FamixJSONExporter) {
    super.addPropertiesToExporter(exporter);

  }

}

