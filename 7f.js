<!DOCTYPE html>
<html>
<body>
<script>
let text = "My phone number is 9440897272";
let pattern= /\d{10}/;
console.log("contains number: ",pattern.test(text));
console.log("Matched number:",text.match(pattern));
</script>
</body>
</html>
