# [Blog](https://blog-hyeok9.vercel.app)

## development

1. 개발 기기의 dns에 ```local.hyeok9.com```를 추가한다.

```bash
# posix
$ sudo vi /etc/hosts
# windows (관리자 권한)
$ code C:\Windows\System32\drivers\etc\hosts

# 아래 라인을 추가
127.0.0.1 local.hyeok9.com
```

2. [mkcert](https://github.com/FiloSottile/mkcert)를 이용해서 local.hyeok9.com 에 대한 인증서를 생성한다.

```bash
$ mkcert -install
$ mkcert local.hyeok9.com
```

3. 이후 아래의 명령어로 개발 서버 ```https://local.hyeok9.com```을 실행시킨다.

```bash
# npm, yarn is not allowed
pnpm i

# posix
sudo pnpm dev
# windows (관리자 권한)
pnpm dev
```
