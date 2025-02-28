import Restaurant2 from '../../../assets/images/Restaurant2.png'
import RestaurantImg from '../../../assets/images/RestaurantImg.png'
import Badge from '../../../components/ui/badge/Badge'
import Button from '../../../components/ui/button/Button'
import generateRandomNumber from '../../../utils-lib/generateRandomNumber'
import { Rating } from '../types/ratings'
import type { Restaurant } from '../types/restaurant'
import { BG_RATES_COLORS } from '../utils-lib/constants'
import { faXmark as closeIcon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface CardDetailsModalProps {
  restaurantDetails: Restaurant | null
  setRestaurantDetails: (
    restaurant: React.SetStateAction<Restaurant | null>
  ) => void
  setRestaurantDetailsPrinter: (
    Restaurant: React.SetStateAction<Restaurant | null>
  ) => void
}

type DetailsModalHeaderProps = Pick<
  CardDetailsModalProps,
  'setRestaurantDetails'
>
export default function RestaurantDetailsModal({
  ...props
}: CardDetailsModalProps) {
  return (
    props.restaurantDetails !== null && (
      <div className='absolute bottom-0 w-full rounded-md bg-bg'>
        <DetailsModalHeader setRestaurantDetails={props.setRestaurantDetails} />
        <DetailsModalContent {...props} />
      </div>
    )
  )
}

function DetailsModalHeader({ setRestaurantDetails }: DetailsModalHeaderProps) {
  const chooseRestaurantImg = () => {
    const randomNumber = generateRandomNumber()
    if (randomNumber === 1) return Restaurant2
    return RestaurantImg
  }

  return (
    <header className='relative flex items-center justify-between rounded-t-md bg-indigo px-4'>
      <h2 className='text-base font-semibold text-main md:text-lg'>
        Restaurants
      </h2>
      <img className='w-1/3' src={chooseRestaurantImg()} alt='Restaurant' />
      <Button
        onClick={() => setRestaurantDetails(null)}
        className='absolute left-1/2 top-2 -translate-x-1/2 text-sm transition duration-300 hover:bg-indigo hover:opacity-65 xs:text-base'
        variant={'ghost'}>
        <FontAwesomeIcon icon={closeIcon} />
      </Button>
    </header>
  )
}

function DetailsModalContent({
  setRestaurantDetails,
  setRestaurantDetailsPrinter,
  restaurantDetails
}: CardDetailsModalProps) {
  if (restaurantDetails)
    return (
      <main className='flex items-center justify-between px-4 py-3 text-xs sm:text-sm md:text-base'>
        <div className='flex flex-col items-start justify-center gap-5'>
          <div className='flex flex-col items-start justify-center gap-1'>
            <Badge className='mb-2' asPill variant='green' size='sm'>
              {restaurantDetails.activity}
            </Badge>
            <h4>{restaurantDetails.name}</h4>
            <p>{restaurantDetails.address}</p>
            <p>{restaurantDetails.postalCode}</p>
          </div>
          <div className='flex flex-col items-start justify-center gap-1'>
            <p>
              <strong>Date de l'inspection : </strong>
              {restaurantDetails.inspectionDate}
            </p>
            <p>
              <strong>Niveau d'hygiène : </strong>
              {(restaurantDetails.rating as Rating).rate}
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-5'>
          <div className='relative'>
            <Badge variant='default' size='md'>
              {(restaurantDetails.rating as Rating).rate}
            </Badge>
            <Badge
              size='xs'
              asPill
              className={`absolute right-[5px] top-[5px] xs:right-2 xs:top-2 ${BG_RATES_COLORS[(restaurantDetails.rating as Rating).color]}`}
            />
          </div>
          <Button
            className='px-1 py-2 shadow hover:rounded-lg hover:shadow-md xs:px-3'
            onClick={() => {
              setRestaurantDetailsPrinter(restaurantDetails)
              setRestaurantDetails(null)
            }}>
            Imprimer cette affichette
          </Button>
        </div>
      </main>
    )
}
