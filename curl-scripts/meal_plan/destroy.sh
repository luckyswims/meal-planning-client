#!/bin/bash

curl "http://localhost:4741/meal_plans${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"

echo
