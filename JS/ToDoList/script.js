function addTask(task) {
	console.log('add ' + task)
	let list = document.querySelector('ul')

	let item = document.createElement('li')
	item.setAttribute('id', task)
	item.innerHTML = task

	list.appendChild(item)
}

function delTask(task) {
	console.log('del ' + task)
	let list = document.querySelector('ul')
	let item = document.querySelector('#' + task)

	list.removeChild(item)
}

function comTask(task) {
	console.log('com ' + task)
	let item = document.querySelector('#' + task)
	item.setAttribute('style', 'color:green;')
}

document.addEventListener('DOMContentLoaded', function() {
	document.querySelectorAll('.btn').forEach(button => { 	           
        button.onclick = () => {
			let task = document.querySelector('#task-text').value
			const type = button.dataset.type
			if (task.length === 0) {
				document.querySelector('#error').innerHTML = 'Enter A Task'
			}
			else {
				document.querySelector('#error').innerHTML = ''
				if (type === 'new') {
	    	    	addTask(task)
	    	    }
	    	    else if (type === 'com') {
	    	    	comTask(task)
	    	    }
	    	    else {
	    	    	delTask(task)
	    	    }
			}
			return false
        }
    })
})