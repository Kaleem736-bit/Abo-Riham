// عرض رسالة تأكيد عند إرسال الطلب
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // منع الإرسال الفوري
        alert('تم إرسال الطلب بنجاح!');
        form.submit(); // إرسال النموذج بعد عرض الرسالة
    });
}
