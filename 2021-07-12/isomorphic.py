# https://leetcode.com/problems/isomorphic-strings/
class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
               
#         dict = {"e": [0], "g": [1, 2]}
#         dict = {"a": [0], "d": [1, 2]}
            
#         dict.values() --> [[0], [1, 2]]
                
        def get_char_index(s):         
            char_dict = {}
            for i in range(len(s)):
                ch = s[i] 
                if ch not in char_dict:
                    char_dict[ch] =[i]
                else:
                    char_dict[ch].append(i)
            
            lst = char_dict.values()

            return lst
        
        s_list = get_char_index(s)
        t_list = get_char_index(t)
        
        for s_el, t_el in zip(s_list, t_list):
            if s_el == t_el:
                continue
            else: return False
        
        return True