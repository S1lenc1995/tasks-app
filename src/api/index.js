const api = {
    async createTask (newTaskMessage) {
		return {
			id:        Date.now(), // уникальный ид в формате Timestamp => 1671882782
			message:   newTaskMessage,
			favorite:  false,
			completed: false,
			created:   new Date(),
		};
	},
	async removeTask (taskId) {
		return true;
	},
	async completeAllTasks (tasks) {
		return true;
	},
}

export default api