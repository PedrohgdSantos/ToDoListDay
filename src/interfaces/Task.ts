export interface ITask {
    id: number;
    title: string;
    difficulty: number;
    status: TaskStatus
}

export type TaskStatus = 
    | "direcionadas"
    | "pendentes"
    | "em_execucao"
    | "concluidas"
    | "canceladas"