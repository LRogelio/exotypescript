import Priority from './priority'
import Date from './date'

class Task {

    private _content: string
    private _date: Date
    private _priority: Priority
    private _checked: boolean
    private list: Task[]

    constructor(content: string, date: Date, priority: Priority, checked: boolean){
        this._content = content
        this._date = date
        this._priority = priority
        this._checked = checked
    }

    get priority(): Priority {
        return this._priority;
    }

    set priority(value: Priority) {
        this._priority = value;
    }
    get checked(): boolean {
        return this._checked;
    }

    set checked(value: boolean) {
        this._checked = value;
    }
    get date(): Date {
        return this._date;
    }

    set date(value: Date) {
        this._date = value;
    }
    get content(): string {
        return this._content;
    }

    set content(value: string) {
        this._content = value;
    }

    add(content: string, date: Date, priority: Priority): number {
        let task = new Task(content, date, priority, false);
        this.list.push(task)
        return this.list.indexOf(task)
    }

    update(index: number, content?: string, date?: Date, priority?: Priority): Task {
        let task = this.list[index]
        if(content !== undefined) {
            task.content = content
        }
        if(date !== undefined) {
            task.date = date
        }
        if(priority !== undefined) {
            task.priority = priority
        }
        this.list[index] = task
        return task
    }

    close(index: number): Task {
        this.list[index].checked = true
        return this.list[index]
    }

    toString(index: number): string {
        let task = this.list[index]
        let etat: string
        etat = task.checked ? 'Effectuée' : 'Non effectuée'
        //J'en suis pas trop sûr pour la date. J'ai pas lu l'exo1
        return `CONTENU : ${task.content}
                DATE : ${task.date}
                PRIORITE: ${task.priority}
                ETAT: ${etat}`
    }

}