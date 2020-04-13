class LRU:

	def __init__(self, capacity):
		self.capacity = capacity
		self.cache = {}
		self.size = 0

	def put(self, key):
		if self.size >= self.capacity:
			least_used = min(self.cache.keys(), key = lambda x : self.cache[x])
			self.cache.pop(least_used)
			self.size -= 1			

		if key in self.cache:
			self.cache[key] += 1
		else:
			self.cache[key] = 1
			self.size += 1			

	def get(self, key):
		if key in self.cache:
			self.cache[key] += 1
			return self.cache[key]
		else:
			self.put(key)
			return -1


	def get_cache(self):
		s = ''
		for each in self.cache:
			s += str(each) + ' '
		return s