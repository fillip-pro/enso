FROM omnijarstudio/naamio:0.2

LABEL authors="Phil J. Łaszkowicz <phil@fillip.pro>"

RUN mkdir -p /usr/share/naamio/eostre

COPY .dist /usr/share/naamio/eostre

ENV NAAMIO_SOURCE=eostre
ENV NAAMIO_TEMPLATES=eostre/stencils/
ENV NAAMIO_PORT=8090

EXPOSE ${NAAMIO_PORT}

WORKDIR /usr/share/naamio/

ENTRYPOINT ["/usr/share/naamio/Naamio"]
