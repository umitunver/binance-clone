import { Button, Container, SectionBanner, Table } from '@/components'
import styles from './index.module.scss'
import { CurrenciesData } from '@/data/currencies'
import React from 'react'
import { TableDataCell } from '@/components/table'
import Image from 'next/image'
import Images from '@/constants/images'
import { abbreviateNumber } from '@/utils/helper'


export default function PopularCryptoCurrencies() {

  function Item({ ...props }) {
    return (
      <React.Fragment>
        <TableDataCell align="start">
          <div className={styles.cell}>
            <div className={styles.images}>
              <Image src={Images[props?.data?.image]} alt={'crypto symbol'} width={30} height={30} />
            </div>
            <span className={styles.coin_name}>
              {props.data.name}
            </span>
            <span className={styles.symbol}>
              {props.data.symbol}
            </span>
          </div>
        </TableDataCell>
        <TableDataCell align="start">
          <span className={styles.price}>
            ${props.data.lastPrice}
          </span>
        </TableDataCell>
        <TableDataCell align="start">
          <span className={`${props.data.h24change > 0 ? 'up' : 'down'}`}>
            {props.data.h24change}%
          </span>
        </TableDataCell>
        <TableDataCell align="end">
          ${abbreviateNumber(props.data.marketCap)}
        </TableDataCell>
      </React.Fragment>
    )
  }

  const Columns = [
    {
      name: "Name",
      key: "name",
      align: "start" as any
    },
    {
      name: "Last Price",
      key: "lastPrice",
      align: "start" as any
    },
    {
      name: "24h Change",
      key: "24hChange",
      align: "start" as any
    },
    {
      name: "Market Cap",
      key: "marketCap",
      align: "end" as any
    }
  ]
  return (

    <Container mt={80}>
      <SectionBanner title='Popular cryptocurrencies' linkText='View more markets' />
      <div className={styles.contain}>
        <Table
          columns={Columns}
          data={CurrenciesData}
          element={(data) => (
            <Item key={data.id} data={data} />
          )}
        />
        <h2>
          Sign up now to build your own portfolio for free!
        </h2>
        <Button title='Get Started' variant='primary' mt={25} />
      </div>
    </Container>

  )
}