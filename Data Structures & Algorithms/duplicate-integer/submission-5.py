class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        # in js we add to a set and compare it length
        # now in normal way with python how do we handle that 
        # we take each item and compare it to the res of the array 
        # if we exist then we will return the arryay using 2 loop
        seen = set()
        for i in range(len(nums)):
            current_element = nums[i]
            if current_element in seen:
                return True
            seen.add(current_element)
        return False