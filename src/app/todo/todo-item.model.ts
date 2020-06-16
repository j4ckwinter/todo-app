export class TodoItem {
  id: number;
  title: string;
  description: string;
  expectedHours: number;
  itemStatus: number;
  category: string;
  dateCreated: string;
  dateToComplete: string;
  priority: number;

  constructor(id: number, title: string, description: string, expectedHours: number, itemStatus: number, category: string, dateCreated: string, dateToComplete: string, priority: number) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.expectedHours = expectedHours;
    this.itemStatus = itemStatus;
    this.category = category;
    this.dateCreated = dateCreated;
    this.dateToComplete = dateToComplete;
    this.priority = priority;
  }
}
