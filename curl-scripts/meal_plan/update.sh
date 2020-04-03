curl --include --request PATCH "http://localhost:4741/meal_plans/${ID}" \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
      "meal_plan": {
        "name": "'"${NAME}"'",
        "meal1": "'"${MEAL}"'",
        "meal2": "'"${MEAL}"'",
        "meal3": "'"${MEAL}"'",
        "meal4": "'"${MEAL}"'",
        "meal5": "'"${MEAL}"'",
        "meal6": "'"${MEAL}"'",
        "meal7": "'"${MEAL}"'",
        "user_id": "'"${USERID}"'"
      }
  }'
