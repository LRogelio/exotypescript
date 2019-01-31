"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task = /** @class */ (function () {
    function Task(content, date, priority, checked) {
        this._content = content;
        this._date = date;
        this._priority = priority;
        this._checked = checked;
    }
    Object.defineProperty(Task.prototype, "priority", {
        get: function () {
            return this._priority;
        },
        set: function (value) {
            this._priority = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (value) {
            this._checked = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (value) {
            this._date = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "content", {
        get: function () {
            return this._content;
        },
        set: function (value) {
            this._content = value;
        },
        enumerable: true,
        configurable: true
    });
    Task.prototype.add = function (content, date, priority) {
        var task = new Task(content, date, priority, false);
        this.list.push(task);
        return this.list.indexOf(task);
    };
    Task.prototype.update = function (index, content, date, priority) {
        var task = this.list[index];
        if (content !== undefined) {
            task.content = content;
        }
        if (date !== undefined) {
            task.date = date;
        }
        if (priority !== undefined) {
            task.priority = priority;
        }
        this.list[index] = task;
        return task;
    };
    Task.prototype.close = function (index) {
        this.list[index].checked = true;
        return this.list[index];
    };
    Task.prototype.toString = function (index) {
        var task = this.list[index];
        var etat;
        etat = task.checked ? 'Effectuée' : 'Non effectuée';
        //J'en suis pas trop sûr pour la date. J'ai pas lu l'exo1
        return "CONTENU : " + task.content + "\n                DATE : " + task.date + "\n                PRIORITE: " + task.priority + "\n                ETAT: " + etat;
    };
    return Task;
}());
