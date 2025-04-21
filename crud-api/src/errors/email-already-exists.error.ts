import { ErrorBase } from "./base.error";

export class EmailAlreadyExistsError extends ErrorBase {
  constructor(message = "O e-mail informado já está sendo utilizado em outra conta") {
    super(409, message);
  }
}