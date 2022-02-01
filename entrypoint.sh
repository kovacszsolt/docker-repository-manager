#!/bin/sh

if [ "$REGISTRY_URL_BASE" = "" ]; then
  REGISTRY_URL_BASE="https://kovacszsolt.github.io/docker-repository-manager/assets/github.server/v2/"
fi
if [ "$REGISTRY_URL_CATALOG" = "" ]; then
  REGISTRY_URL_CATALOG="catalog.json"
fi
if [ "$REGISTRY_URL_TAGLIST" = "" ]; then
  REGISTRY_URL_TAGLIST="/tags/list.json"
fi

if [ "$REGISTRY_URL_TAGIINFO" = "" ]; then
  REGISTRY_URL_TAGIINFO="/manifests/tag/"
fi

if [ "$REGISTRY_URL_TAGIINFOLAYERS" = "" ]; then
  REGISTRY_URL_TAGIINFOLAYERS="/manifests/layers/"
fi
echo "{\"name\": \"$REGISTRY_NAME\",\"url\": {\"base\": \"$REGISTRY_URL_BASE\",\"catalog\": \"$REGISTRY_URL_CATALOG\",\"tagList\": \"$REGISTRY_URL_TAGLIST\",\"tagInfo\": \"$REGISTRY_URL_TAGIINFO\",\"tagInfoLayers\": \"$REGISTRY_URL_TAGIINFOLAYERS\"}}" > /usr/share/nginx/html/assets/config.docker.json
./docker-entrypoint.sh "$@"
