import { Skill } from "./skill";

export interface singleSkillModel<T> extends Skill{
    data:T
}