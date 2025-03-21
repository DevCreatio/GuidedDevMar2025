create or replace view public."AkvVwContactAgeDays" as
select "Id" as "AkvId", "Name" as "AkvName", "BirthDate" as "AkvBirtdate",
CURRENT_DATE - "BirthDate" as "AkvAgeDays",
"Id" as "AkvContactId"
from public."Contact"