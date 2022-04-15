

const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
	const item = list_items[i];
	
	item.addEventListener( 'dragstart', function() {
		// console.log('dragstart');
		draggedItem = item;
		setTimeout(function () {
			item.style.display = 'none';
		}, 0);
	});

	item.addEventListener( 'dragend', function() {
		// console.log('dragend');
		setTimeout(function () {
			draggedItem.style.display = 'block';
			draggedItem = null;
			console.log(id);

			
		}, 0);
		// document.getElementById(id);
		// $('.list-item').each(function (i, item){
		// 	alert(item.id);
		// });
	});

	for (let j = 0; j < lists.length; j++) {
		const list = lists[j];
		// console.log('dragend');

		list.addEventListener('dragover', function(e){
			e.preventDefault();
		});
		list.addEventListener('dragenter', function(e){
			e.preventDefault();
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
		});
		list.addEventListener('dragleave', function(e){
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});
		list.addEventListener('drop', function(e){
			this.append(draggedItem);
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});
		
	}
}














// var p = document.getElementsByTagName('p');
// var choice = document.getElementsByClassName('choice');
// var dragItem = null;
// for(var i of p){
// 	i.addEventListener('dragStart', dragStart);
// 	i.addEventListener('dragEnd', dragEnd);
// }

// function dragStart(){
// 	dragItem = this;
// 	setTimeout(() =>this.style.display = "none", 0);
// }
// function dragEnd(){
// 	setTimeout(() =>this.style.display = "none", 0);
// 	dragItem = null;
// }
