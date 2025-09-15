Feature: Tally Function
  As a developer
  I want to add two numbers together
  So that I can perform basic arithmetic operations

  Scenario Outline: Adding two numbers
    Given I have the numbers <first_number> and <second_number>
    When I add them together
    Then the result should be <expected_result>

    Examples:
      | first_number | second_number | expected_result |
      | 5            | 3             | 8               |
      | 10           | -4            | 6               |
      | -7           | -3            | -10             |
      | 15           | 0             | 15              |
      | 2.5          | 3.7           | 6.2             |

  Scenario Outline: Adding three numbers
    Given I have the numbers <first_number>, <second_number>, and <third_number>
    When I add them together
    Then the result should be <expected_result>

    Examples:
      | first_number | second_number | third_number | expected_result |
      | 5            | 3             | 8            | 16              |
      | 10           | -4            | 6            | 12              |
      | -7           | -3            | -10          | -20             |
      | 15           | 0             | 15           | 30              |
      | 2.5          | 3.7           | 6.2          | 12.4            |