from lru import *

class LRU_test:

	def test(self):
		test = LRU(4)
		a = [1,2,3,4,5,6,7,8,9,10]
		for i in range(len(a)):
			test.put(a[i])

		assert test.get_cache() == "7 8 9 10 "
		assert test.get(3) == -1
		assert test.get_cache() == "7 9 10 3 "
		assert test.get(3) == 2
		assert test.size == 4
		print("All asserts cleared")


if __name__ == "__main__":
	obj = LRU_test()
	obj.test()