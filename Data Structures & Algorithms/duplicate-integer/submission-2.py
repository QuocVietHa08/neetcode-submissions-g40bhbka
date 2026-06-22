class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        # in js we add to a set and compare it length
        # now in normal way with python how do we handle that 
        # we take each item and compare it to the res of the array 
        # if we exist then we will return the arryay using 2 loop
        current_eletment = nums[i]
        for j in range(i+1, len(nums)):
            if nums[i] == nums[j]:
                return True
        