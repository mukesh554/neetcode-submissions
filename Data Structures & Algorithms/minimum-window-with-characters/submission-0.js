class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
         if (t.length > s.length) return "";

    const need = new Map();

    for (const ch of t) {
        need.set(ch, (need.get(ch) || 0) + 1);
    }

    let left = 0;
    let start = 0;
    let minLen = Infinity;
    let missing = t.length;

    for (let right = 0; right < s.length; right++) {
        const ch = s[right];

        if (need.has(ch)) {
            if (need.get(ch) > 0) {
                missing--;
            }
            need.set(ch, need.get(ch) - 1);
        }

        while (missing === 0) {
            const windowLen = right - left + 1;

            if (windowLen < minLen) {
                minLen = windowLen;
                start = left;
            }

            const leftChar = s[left];

            if (need.has(leftChar)) {
                need.set(leftChar, need.get(leftChar) + 1);

                if (need.get(leftChar) > 0) {
                    missing++;
                }
            }

            left++;
        }
    }

    return minLen === Infinity
        ? ""
        : s.substring(start, start + minLen);
};

    }

