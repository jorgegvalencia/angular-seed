import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class User {
  @JsonProperty('id', Number)
  id: number = undefined;
  @JsonProperty('name', String)
  name: string = undefined;
  @JsonProperty('surname', String)
  surname: string = undefined;
}
