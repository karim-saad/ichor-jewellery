import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/layout';
import VisuallyHidden from '@chakra-ui/visually-hidden';
import Image from 'next/image';
import Link from 'next/link';
import { parsePrice } from '../lib';
import { ListingWithImages } from '../typings';

export default function ListingCard(listingWithImages: ListingWithImages) {
    const { etsyUrl, images, title, price } = listingWithImages;
    const image = images[0];

    return <LinkBox d='flex' flexDir='column'>
        <Box>
            <Image
                src={image.imageUrl.full}
                alt={title}
                height={280}
                width={280}
            />
        </Box>
        <Text
            align='center'
            mt={2}
        >
            {title}
        </Text>
        <Text
            align='center'
            fontSize={['sm', 'md']}
            fontWeight='semibold'
        >
            {parsePrice(price)}
        </Text>
        <Link href={etsyUrl} passHref>
            <LinkOverlay>
                <VisuallyHidden>{title}</VisuallyHidden>
            </LinkOverlay>
        </Link>
    </LinkBox>;
}
