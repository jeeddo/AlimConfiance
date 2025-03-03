import Logo2 from '../../../assets/images/Logo2.png'
import Badge from '../../../components/ui/badge/Badge'
import Button from '../../../components/ui/button/Button'
import useClickOutside from '../../../hooks/useClickOutside'
import { Rating } from '../types/ratings'
import type { Restaurant } from '../types/restaurant'
import { BG_RATES_COLORS } from '../utils-lib/constants'
import {
  faXmark as closeIcon,
  faPrint as printerIcon
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print'

interface CardDetailsPrintModalProps {
  setPrintRestaurantDetails: (
    restaurant: React.SetStateAction<Restaurant | null>
  ) => void
  restaurantDetails: Restaurant | null
}

type PrintModalContentProps = Pick<
  CardDetailsPrintModalProps,
  'restaurantDetails'
>
type PrintModalHeaderProps = Pick<
  CardDetailsPrintModalProps,
  'setPrintRestaurantDetails'
>
export default function RestaurantDetailsPrintModal({
  setPrintRestaurantDetails,
  restaurantDetails
}: CardDetailsPrintModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const printModal = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (restaurantDetails) setIsModalOpen(true)
    else setIsModalOpen(false)
  }, [restaurantDetails])

  useClickOutside(
    printModal,
    () => setPrintRestaurantDetails(null),
    false,
    isModalOpen
  )

  return (
    isModalOpen &&
    restaurantDetails !== null && (
      <div
        ref={printModal}
        className='absolute left-0 top-0 z-50 flex w-full flex-col items-start justify-center gap-2 rounded-md bg-bg text-xs xs:w-3/4 xs:text-sm'>
        <PrintModalHeader
          setPrintRestaurantDetails={setPrintRestaurantDetails}
        />
        <PrintModalContent restaurantDetails={restaurantDetails} />
      </div>
    )
  )
}

function PrintModalHeader({
  setPrintRestaurantDetails
}: PrintModalHeaderProps) {
  return (
    <header className='flex h-10 w-full items-center justify-center rounded-t-md bg-indigo'>
      <Button
        variant={'ghost'}
        onClick={() => setPrintRestaurantDetails(null)}
        className='h-full w-full text-sm transition duration-300 hover:bg-indigo hover:opacity-65 sm:text-base'>
        <FontAwesomeIcon icon={closeIcon} />
      </Button>
    </header>
  )
}
function PrintModalContent({ restaurantDetails }: PrintModalContentProps) {
  const [isPrintBtnClicked, setPrintBtnClicked] = useState(false)
  const contentRef = useRef<HTMLDivElement | null>(null)

  const reactToPrint = useReactToPrint({
    contentRef,
    onAfterPrint: () => setPrintBtnClicked(false)
  })
  useEffect(() => {
    if (isPrintBtnClicked) reactToPrint()
  }, [isPrintBtnClicked, reactToPrint])

  if (restaurantDetails)
    return (
      <main
        ref={contentRef}
        className='m-4 flex flex-col items-start justify-center gap-4 rounded border-2 border-dashed border-indigo p-5 md:gap-5'>
        <div
          className={`flex ${isPrintBtnClicked ? 'justify-between' : 'justify-around'} mb-1 items-center gap-2`}>
          <img
            className='w-1/5 shadow'
            src={Logo2}
            alt="Logo ministère de l'agriculture et de l'alimentation"
          />
          <h2>alimconfiance.gouv.fr</h2>
          {!isPrintBtnClicked && (
            <Button
              variant={'outline'}
              className='rouunded transition duration-500 hover:bg-indigo hover:text-main active:scale-95'
              onClick={() => setPrintBtnClicked(true)}>
              Imprimer
              <FontAwesomeIcon icon={printerIcon} />
            </Button>
          )}
        </div>
        <div className='flex flex-col items-start justify-center gap-4'>
          <div className='flex flex-col items-start justify-center gap-3'>
            <h3 className='text-sm font-semibold text-main xs:text-base'>
              {restaurantDetails.name}
            </h3>
            <Badge variant='main' size='sm' className='px-3'>
              {restaurantDetails.activity}
            </Badge>
          </div>
          <div className='flex flex-col items-start justify-center gap-1'>
            <p>{restaurantDetails.address}</p>
            <p>{restaurantDetails.postalCode + ' ' + restaurantDetails.city}</p>
          </div>
        </div>
        <hr className='w-1/3 rounded-full text-slate-500' />
        <div className='flex flex-col items-start justify-center gap-1'>
          <p>
            <strong>Date de l'inspection : </strong>
            {restaurantDetails.inspectionDate}
          </p>
          <p className='italic underline'>Validité 1 an</p>
        </div>
        <div className='relative mx-auto mt-5 max-w-full'>
          <Badge variant='default' size='lg'>
            {(restaurantDetails.rating as Rating).rate}
          </Badge>
          <Badge
            size='xs'
            asPill
            className={`absolute right-2 top-2 ${BG_RATES_COLORS[(restaurantDetails.rating as Rating).color]}`}
          />
        </div>
      </main>
    )
}
