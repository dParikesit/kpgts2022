# kpgts2022
KPGTS2022 Web Source Code

Kepada divisi IT selanjutnya, ini markdown untuk backend. Yang frontend ada di  
[Readme Frontend](https://github.com/dParikesit/kpgts2022-karangpraga/blob/main/frontend/README.md)

## ToC
- [Struktur file](#struktur-file)
- [Cara deploy](#cara-deploy)
- [Apa yang bisa diubah](#editing-files)

### Struktur File
- Folder controller
  - Exported functions yang mengirimkan query database
    - Kalau mau buat baru atau ngubah sesuatu lihat referensi di [Knex Query](https://devhints.io/knex)
- Folder database  
  - File db.js yang berisi config serta membuat koneksi ke database  
  - Folder migrations yang berisi file deklarasi struktur database
    - File disini nantinya bakal dipakai buat create tables pertama kali ataupun delete semua tables
    - Kalau mau ubah tabel database, ubah file itu.
    - Kalian bisa lihat referensi di [Knex Schema](https://devhints.io/knex#schema)
- Folder frontend
  - File frontend
- Folder middleware
  - Custom middleware. Pada waktu pembuatan readme, middleware nya cuma role-checker
- Folder public
  - File assets backend seperti logo
  - Assets ini diperlukan untuk kirim email dengan embedded image
- Folder routes
  - File routes berdasarkan kegunaannya
- Folder templates
  - Folder template email
  - Kalau mau nambahin template email, 
    1. Buat file html biasa, bisa pakai [Unlayer Email Templates](https://unlayer.com/templates)
    2. Rename file html nya jadi html.ejs
    3. Masukkan html.ejs itu ke folder baru di templates
    4. Buat file subject.ejs berisi subject email
    5. Kalau ada variable di html nya, ubah jadi`<%= var %>` , var nya bisa diganti apapun. Variable ini juga bisa ditaruh di inner HTML
       Di routes nya, panggil fungsi
       >mailer.send ({  
          template: `Nama folder template`,  
          message: {
          to: `Email tujuan`
          },  
          locals: {
          var: `Isi variabel`
          }  
          });  
       
        mailer ini berasal dari folder utils. Images src nya juga harus dijadikan variable yang referensi ke assets di folder public
- Folder uploads
  - File gambar dari upload post
- Folder utils
  - File config dan memanggil nodemailer untuk kirim email
- .env.example
  - Contoh file .env
- docker-compose
  - Untuk memulai db, frontend, backend di dev atau di production
- Dockerfile
  - Buat docker image backend
- index.js
  - Starter file backend
- knexfile.js
  - Mulai database migrations

### Cara deploy
> Ada 3 tahap deploy app ini, menentukan server, setup aplikasi, jalankan aplikasi
1. Menentukan server  
Ada 2 jenis server yang bisa kalian pakai, vps atau web hosting biasa  
   1. VPS  
   Pada vps, kalian harus mengatur semuanya sendiri  
      - Pros:
         - Bisa atur semuanya sendiri, sehingga ga kena limitation app yang bisa dipakai  
      - Cons:
           - Ngatur semuanya sendiri lumayan ribet  
           - Biasanya susah di pengaturan domain pakai nginx atau setup mail server nya
           - Buat yang mail server, biasanya vps nutup port mail, jadi harus beli mail server lagi seperti [mailgun](https://www.mailgun.com/) atau [mailchimp](https://mailchimp.com/)
   2. Web hosting
   Di web hosting, kalian biasanya dapet interface cpanel/plesk
      - Pros:
        - Mudah setup nya. Pengaturan domain juga sudah terintegrasi kalau kalian beli hosting sekalian beli domain
      - Cons:
        - Banyak limitation nya. Banyak yang gabisa buat app node js sama postgreSQL. Hati-hati kalau beli
      - **Requirements**:
        - Cari yang bisa node js dan postgreSQL
        - Cari yang bisa kirim email
        - Cari yang bisa git dan ssh
        - Pada waktu README dibuat, digunakan hosing [Domainesia paket Super](https://www.domainesia.com/pesan&q=hosting&paket=super/)
2. Setup aplikasi (Web hosting version)
   1. Persiapan  
      1. Setelah kalian beli, kalian bakal dapet email berisi informasi tentang hosting kalian  
         ![Server Info](https://github.com/dParikesit/kpgts2022-karangpraga/raw/main/readmeAssets/hostInfo.png "Hosting Info)
   2. Setup Repo
      1. Ssh ke hosting kalian. Kalian bisa pakai putty di windows atau langsung di terminal linux  
      `ssh cpanelUsername@serverIP -p SSHPort`  
      Ubah Username, IP dan SSH port sesuai info yg dikasih.  
      Contoh : `ssh kpgtscom@103.147.xxx.xx -p 64000`  
      Tunggu bbrp saat nanti kalian akan diminta password, isi dengan cpanelPassword
      2. Fork repo kpgts ini ke github kalian
      3. Buat deploy key di **repo hasil fork**, ikutin [Tutor Deploy Keys](https://docs.github.com/en/developers/overview/managing-deploy-keys)
      4. Login ke cpanel
      5. Di cpanel cari bagian **Git Version Control**
      6. Pencet create, masukkan clone URL **repo hasil fork**. Contoh clone url  
         `git@github.com:dParikesit/kpgts2022-karangpraga.git`
   3. Setup Database
      1. Kembali ke homepage cpanel
      2. Cari bagian **PostgreSQL Database Wizard**
      3. Buat database, misal `kpgts`, maka nama db full nya jadi `cpanelUsername_kpgts`  
         Pada tutor ini contoh db full nya `kpgtscom_kpgts`
      4. Buat user, misal `postgres`, maka user full nya jadi `cpanelUsername_postgres`  
         Pada tutor ini user nya `kpgtscom_postgres`
      5. Pencet submit
      6. Buka DB Tool, contohnya `Jetbrains Datagrip` atau `DBeaver`
      7. Click `new -> Data Source -> PostgreSQL`
      8. Pada tab SSH/SSL, centang `Use SSH Tunnel`, masukkan informasi SSH
      9. Pada tab General, masukkan Host `localhost`, port `5432`, user `kpgtscom_postgres`, password user db ketika buat di nomer 4, Database `kpgtscom_kpgts`
      10. Click `Test Connection`, apabila berhasil click `OK`
   4. Setup Email
      1. Cari bagian **Email Accounts**
      2. Pencet `Create`
      3. Buat username, misal `noreply`, berarti full username nya `noreply@kpgts2022.com`
      4. Buat password
      5. Create
      6. Login ke Gmail sembarang milik kalian
      7. Ke bagian `Settings`, `Accounts and Import`
      8. Pada bagian `Send mail as`, klik `Add another email address`
      9. Pada SMTP Server, masukkan alamat server yang ada di inbox email cpanel kalian,   
         contoh `mail.kpgts2022.com`
      10. Username masukkan alamat email, contoh `noreply@kpgts2022.com`
      11. Port masukkan `465`
      12. Centang `Secured connection, using SSL`
   5. Setup Node JS App
      1. Cari bagian **Setup Node.js App**
      2. Klik Create Application
      3. Ubah Application Mode jadi `production`
      4. Ubah Application root jadi repositories/kpgts2022-karangpraga
      5. Ubah Application Startup File jadi `index.js`
      6. Masuk ke ssh lagi
      7. Ketik  
         `cd repositories/kpgts2022-karangpraga`  
         `mv .env.example .env`  
         `nano .env`  
         Isikan file env dengan
         >DB_Host=127.0.0.1  
         DB_PORT=5432  
         DB_USER=kpgtscom_postgres  
         DB_PASS=passYgTadiDibuat  
         SESSION_SECRET=ini secret  
         IMAGE_FOLDER=uploads  
         MAILER_FROM=noreply@kpgts2022.com
         MAILER_HOST=mail.kpgts2022.com  
         MAILER_PORT=465  
         MAILER_USERNAME=noreply@kpgts2022.com  
         MAILER_PASSWORD=passYgTadiDibuat  
         ORIGIN_URL=https://kpgts2022.com  
         OPREG=open  
      
         Sesuaikan bagian `DB_USER`, `DB_PASS`, `MAILER_FROM`, `MAILER_HOST`, `MAILER_PORT`, `MAILER_USERNAME`, `MAILER_PASSWORD`, `ORIGIN_URL`  
         Untuk `MAILER_HOST` dan `MAILER_PORT`, cari di bagian email inbox  
         Untuk `ORIGIN_URL` isinya alamat website kalian pakai https  
         Untuk `OPREG` , kalau open berarti buka registrasi, close berarti sudah tutup
      
   6. Migrate Database
      1. Cari bagian **Setup Node.js App**
      2. Klik `Edit the application` pada app kalian
      3. Di bagian sekitar atas ada tulisan `Enter to the virtual environment.To enter to virtual environment, run the command:`  
         Copy isinya setelah titik dua (:)
      4. SSH ke hosting
      5. Paste yang tadi di copy
      6. Ketik `yarn knexMigrate`
      7. Kalau sukses berarti udah oke, kalau ngga gws
3. Jalankan aplikasi
   1. Di cpanel bagian **Setup Node.js App**, klik `Edit the application`
   2. Kalau aplikasi belum jalan `Start App`, kalau sudah `Restart App`
### Editing files
1. Kalau ubah frontend, jangan lupa build dulu, kemudian push juga hasil build (jaga-jaga kalau hosting tidak kuat build)
2. Setelah push apapun, jangan lupa di cpanel bagian **Git Version Control** cari bagian pull and deploy, kemudian pull
3. Setelah itu, jangan lupa restart aplikasi
4. Kalau kalian mau reset table, masuk ke ssh, ketik `yarn knexRollback`, ketik `yarn knexMigrate`
5. Have fun !!!
