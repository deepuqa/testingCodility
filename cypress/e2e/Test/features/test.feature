Feature: Tests
    
  Scenario: Test
    GIVEN I add four random items to my cart
    WHEN I view my cart
    THEN I find total four items listed in my cart
    WHEN I search for lowest price item
    THEN I am able to remove the lowest price item from my cart
    THEN I am able to verify three items in my cart