//
//  Release+Dictionary.h
//  skippbox
//
//  Created by Remi Santos on 20/10/2016.
//  Copyright © 2016 Skippbox. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "hapi/services/Tiller.pbrpc.h"
#import "hapi/chart/Metadata.pbobjc.h"
#import "hapi/release/Status.pbobjc.h"

@interface Release (Dictionary)

-(NSDictionary *) toDictionary;

@end
