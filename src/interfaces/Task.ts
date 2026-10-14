export interface ITask {
    id: number;
    title: string;
    description: string;
    difficulty: number;
    status: TaskStatus
}

export type TaskStatus = 
    | "direcionadas"
    | "pendentes"
    | "em_execucao"
    | "concluidas"
    | "canceladas"