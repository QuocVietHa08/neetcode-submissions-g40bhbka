class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        ROWS, COLS = len(board), len(board[0])
        res = []

        trie = {}
        for word in words:
            node = trie
            for char in word:
                node = node.setdefault(char, {})
            node['#'] = word

        def backtrack(r, c, parent):
            letter = board[r][c]
            curr_node = parent[letter]
            
            word_match = curr_node.pop('#', None)
            if word_match:
                res.append(word_match)
            
            board[r][c] = '*'
            for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
                nr, nc = r + dr, c + dc
                if 0 <= nr < ROWS and 0 <= nc < COLS and board[nr][nc] in curr_node:
                    backtrack(nr, nc, curr_node)
            board[r][c] = letter

            if not curr_node:
                parent.pop(letter)
        
        for r in range(ROWS):
            for c in range(COLS):
                if board[r][c] in trie:
                    backtrack(r, c, trie)
        return res