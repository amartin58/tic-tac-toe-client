
curl "https://tic-tac-toe-api-production.herokuapp.com/change-password" \
--include \
--request "PATCH" \
--header "Authorization: Bearer ${TOKEN}"
--header "Content-Type: application/json"
--data '{
  "passwords": {
  old: "'"${OLDPW}"'",
  "password":"'"${NEWPW}"'"
}
}'

echo
