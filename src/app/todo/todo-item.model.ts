export class TodoItem {
  id: string;
  title: string;
  description: string;
  category: string;
  priority: number;
  dateCreated: string;

  constructor(id: string, title: string, description: string, category: string, priority: number, dateCreated: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.category = category;
    this.priority = priority;
    this.dateCreated = dateCreated;
  }
}
