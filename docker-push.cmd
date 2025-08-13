@REM docker build -t scsmn/bi.252.mn-frontend .
@REM docker push scsmn/bi.252.mn-frontend
yarn build:prod && docker build -t registry.gitlab.com/scsmn/bi.252.mn/frontend:sec . && docker push registry.gitlab.com/scsmn/bi.252.mn/frontend:sec
