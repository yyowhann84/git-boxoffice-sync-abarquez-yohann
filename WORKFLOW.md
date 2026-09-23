# Box Office Sync Workflow

## Final calculateTicketPrice
The final `calculateTicketPrice` function incorporates all four contributor changes in the following order of execution:
1. **VIP Surcharge:** Calculates base ticket cost (`quantity * basePrice`) and applies a 50% surcharge if `isVip` is `true` (`total *= 1.5`).
2. **Group Discount:** Applies a 10% discount when 5 or more tickets are ordered (`quantity >= 5`, `total *= 0.9`).
3. **Flat Discount:** Subtracts a flat $10 from the accumulated total (`total -= 10`).
4. **Rounding:** Applies `Math.round(total)` to round the final result to the nearest integer instead of truncating decimal places.

## Task 3 vs. Task 5
Task 3 involved resolving a two-way conflict between Contributor A (group discount) and Contributor B (rounding). Reconciling two distinct logic changes was straightforward.
Task 5 was significantly more complex because it involved a three-way conflict where Contributor C added a VIP surcharge on top of a branch that already contained divergent changes from A and B. Synthesizing three distinct requirements required careful manual reconstruction of the entire function structure to ensure no feature was overwritten or lost.

## Why the $10 discount affected unrelated tests
The flat $10 discount was added directly inside the shared `calculateTicketPrice` function. Because all other unit tests (such as group discount and VIP surcharge tests) evaluate outputs produced by this exact shared function, modifying the final calculation formula altered the expected outputs across tests that were not explicitly written for the $10 discount.

## Process change that could have prevented the rejected pushes
The team could adopt a strict branch synchronization policy: requiring all contributors to run `git fetch` and integrate latest remote changes (via `git rebase` or `git merge`) prior to making local edits and before attempting a `git push`. Enforcing Pull Request (PR) workflows with branch protection rules on GitHub would also catch non-fast-forward pushes before they occur.

## Screenshot Evidence
- Task 1: `screenshots/task1.png`
- Task 2: `screenshots/task2.png`
- Task 3: `screenshots/task3.png`
- Task 4: `screenshots/task4.png`
- Task 5: `screenshots/task5.png`
- Task 6: `screenshots/task6.png`
- Task 7: `screenshots/task7.png`