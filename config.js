/* =====================================================================
   config.js — ไฟล์ตั้งค่าของบ้านการ์ตูนของเรา  (แก้เฉพาะไฟล์นี้)
   - วางไว้โฟลเดอร์เดียวกับ index.html และตั้งชื่อ config.js (ตัวพิมพ์เล็กทั้งหมด)
   - เมื่อได้ index.html เวอร์ชันใหม่ ให้อัปโหลดทับเฉพาะ index.html ไม่ต้องแก้ไฟล์นี้
   - ค่าในไฟล์นี้เปิดดูได้โดยผู้ที่เปิดเว็บ อย่าใส่ client secret หรือรหัสผ่าน
   ===================================================================== */

// OAuth Client ID (Google Cloud Console > Credentials) ลงท้ายด้วย .apps.googleusercontent.com
const CLIENT_ID = '437842431692-l7cbh663ukspuem9s1f77d2i4nuifcel.apps.googleusercontent.com';

// API key (ควรจำกัด HTTP referrer ให้ตรงโดเมนเว็บ และจำกัดเฉพาะ Google Drive API)
const API_KEY = 'AIzaSyBcNDtP533PgpHb9iyRHWnCIQMU0k7VPKE';

// id ของโฟลเดอร์ใน Google Drive ที่ต้องการให้แสดง ใส่ได้หลายตัว คั่นด้วยเครื่องหมายจุลภาค
// วิธีหา id: เปิดโฟลเดอร์ใน drive.google.com ดู URL ส่วนหลัง /folders/
// หน้าแรกจะแสดงสิ่งที่อยู่ "ข้างใน" ทุกโฟลเดอร์รวมกัน และบัญชีที่ล็อกอินต้องเข้าถึงทุกโฟลเดอร์ได้
const ROOT_FOLDER_IDS = [
    '1puBAVnPh88MgKMEJJDXWsO58mzKV3p0x',
	'1UX3kCdzwRZMS6dkTc6Gr6Cch0mlsninz',
	'1ljSh0XEplhH5J60bAv3rldQQre3YkB-B',
];

// อีเมล Google ของผู้ดูแลระบบ (ได้เพียงบัญชีเดียว) ปล่อยเป็น '' ถ้าไม่ต้องการผู้ดูแล
const ADMIN_EMAIL = 'ichijet@gmail.com';
