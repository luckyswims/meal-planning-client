#!/bin/bash

curl "http://localhost:4741/meal_plans" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
