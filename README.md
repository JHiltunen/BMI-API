# BMI-API
School project. REST API for bmi calculator.

This is a project for REST api that calculates bmi and tells description if the weight is normal, overweight or underweight.

// instructions for using the API are coming later

API specification:

GET /bmi

Query parameters:
weight: number, required
height: number, required
lang: fi|en, optional, default: en
unit: metric|imperial, optional, default: imperial
imperial (height in inches and weight in pounds)

Responses:

200 OK
Content-Type: application/json
{
  "bmi": {number},
  "description": {text}
}

400 Bad request
Content-Type: application/json
{
  "error": {details}
}
