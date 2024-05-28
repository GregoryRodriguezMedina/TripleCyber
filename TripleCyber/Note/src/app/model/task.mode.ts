export class TaskRequest {
  task!: string;
  priority!: number;
  solution!: string;
  created!: number;
  solved!: number | null;
}


export class TaskResponse{
  id!: number;
}
