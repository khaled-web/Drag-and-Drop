const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for (const empty of empties) {
 empty.addEventListener('dragover', dragOver);
 empty.addEventListener('dragenter', dragEnter);
 empty.addEventListener('dragleave', dragLeave);
 empty.addEventListener('drop', dragDrop);

}


/* DragStart */
function dragStart() {
 this.className += ' hold'
 setTimeout(() => this.className = 'invisible', 0)
}

/* DragEnd */
function dragEnd() {
 this.className = 'fill'
}

/* DragOver */
function dragOver(e) {
 e.preventDefault();
}

/* Drag Inter */
function dragEnter(e) {
 e.preventDefault();
 this.className += ' hovered'
}

/* DragLeave */
function dragLeave() {
 this.className = 'empty'

}

/* DragDrop */
function dragDrop() {
 this.className = 'empty'
 this.append(fill)
}