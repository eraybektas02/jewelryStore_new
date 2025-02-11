import { ImageSource, Application } from '@nativescript/core';
import { Image } from '@nativescript/core';
import { GridLayout } from '@nativescript/core';
import { Page } from '@nativescript/core';
import { Frame } from '@nativescript/core';

export async function showImagePreview(base64Image: string) {
    if (!base64Image) return;

    const page = new Page();
    page.backgroundColor = 'black';
    
    const grid = new GridLayout();
    const image = new Image();
    
    try {
        // Base64'ü temizle ve ImageSource oluştur
        const imageSource = await ImageSource.fromBase64(base64Image);
        
        if (imageSource) {
            // Image özelliklerini ayarla
            image.imageSource = imageSource;
            image.stretch = 'aspectFit';
            
            // Grid özelliklerini ayarla
            grid.horizontalAlignment = 'stretch';
            grid.verticalAlignment = 'stretch';
            
            grid.addChild(image);
            page.content = grid;
            
            // Tıklama ile kapatma
            page.on('tap', () => {
                Frame.topmost().goBack();
            });
            
            // Sayfayı göster
            Frame.topmost().navigate({
                create: () => page,
                transition: {
                    name: 'fade',
                    duration: 300
                }
            });
        }
    } catch (error) {
        console.error('Image preview error:', error);
    }
}